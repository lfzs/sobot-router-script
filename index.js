import puppeteer from 'puppeteer'
import { SIGN_IN_PATH, OUTBOUND_ROUTE_PATH, EMAIL, PWD, USER_ID, CHROME_DISABLED_ARGS } from './constant.js'
const sleep = millisecond => new Promise(resolve => setTimeout(resolve, millisecond))
puppeteer.executablePath
const browser = await puppeteer.launch({
  // headless: false,
  // devtools: true,
  args: [
    // '--start-fullscreen',
    ...CHROME_DISABLED_ARGS,
  ],
})
const [page] = await browser.pages()
await page.setViewport({ width: 1920, height: 1080 })
await page.goto(SIGN_IN_PATH)

// 进入登录页面
await page.locator('#loginUser').fill(EMAIL)
await page.locator('#loginPwd').fill(PWD)
await page.click('.ant-form .ant-btn[type=submit]')
await page.waitForNavigation()

// 登录成功后，进入外呼路由页面，搜索
await page.goto(OUTBOUND_ROUTE_PATH)
const inputNumberSelector = '.header-search .sui-input-search input'
await page.locator(inputNumberSelector).fill(USER_ID)
await sleep(500)
await page.keyboard.press('Enter')
// 等待搜索结果
await page.waitForFunction(user_id => {
  const cell = document.querySelector('.ant-table-tbody > tr:nth-child(2) > td:nth-child(3) .sui-ellipsis')
  if (cell?.textContent === user_id) return true
}, {}, USER_ID)

// 点击编辑
await page.locator('.ant-table-tbody > tr:nth-child(2) > td:last-child a').filter(a => a.textContent === '编辑').click()

const ruleItemSelector = '.obrouter_edit_service .obrouter_edit_service_body .obrouter_info_item_right .obrouter_edit_service_body_item_rule:nth-child(2)'
// 等待出现
await page.locator(ruleItemSelector).wait()
await sleep(500)
const isChecked = await page.$(`${ruleItemSelector} .ant-checkbox-wrapper-checked`)
if (isChecked) {
  // 已经开启，无需处理
} else {
  // 点击动态外显方案
  await page.locator(`${ruleItemSelector} input`).click()
  await page.locator(`${ruleItemSelector} .ant-select-selection-search-input`).click()
  await page.locator(`${ruleItemSelector} .rc-virtual-list .rc-virtual-list-holder`).click()
  await page.locator('.obrouter_edit_service_foot button').click()
  // 确保点击成功
  await page.waitForFunction(() => !document.querySelector('.obrouter_edit_service_foot button'))
}
await browser.close()
