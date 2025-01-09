// 登录页面地址
export const SIGN_IN_PATH = 'https://www.sobot.com/auth/sign_in'
// 外呼路由设置页面
export const OUTBOUND_ROUTE_PATH = 'https://console.sobot.com/csm/setting/outboundRoute'
// 外部传递的信息
export const EMAIL = process.argv[2]
export const PWD = process.argv[3]
export const USER_ID = process.argv[4]
// 禁用 chrome 不必要的功能，提升性能
export const CHROME_DISABLED_ARGS = [
  '--disable-notifications', // 禁用Web 通知和推送 API，影响聚焦态
  '--no-sandbox', // 禁用沙盒
  '--disable-breakpad', // 禁用崩溃报告。
  '--disable-setuid-sandbox', // 禁用setuid沙盒
  '--disable-dev-shm-usage', //解决/dev/shm 分区在某些 VM 环境中太小，导致 Chrome 失败或崩溃
  '--disable-gpu', //禁用GPU硬件加速
  '--no-first-run', // 跳过首次运行任务 没有设置首页。在启动的时候，就会打开一个空白页面。
  '--disable-features=AudioServiceOutOfProcess', // 禁用音频沙盒功能
  '--disable-hang-monitor', // 禁止在渲染器进程中挂起监视器对话框。(选项卡允许直接关闭)
  '--disable-domain-reliability', // 禁用域可靠性监控。
  '--no-pings', // 不发送超链接审核 ping
  '--disable-extensions', //禁用扩展
  '--disable-component-update', //禁用组件更新
  '--no-default-browser-check', // 禁用默认浏览器检查。
  '--disable-ipc-flooding-protection', // 禁用 IPC 泛洪保护
  '--disable-popup-blocking', // 禁用弹出窗口阻止。
  '--disable-print-preview', // 禁用打印预览
  '--disable-prompt-on-repost', // 禁用 prompt
  '--disable-speech-api', // 禁用 Web Speech API（语音识别和合成）。
  '--use-mock-keychain', // 使用 mock-keychain 防止提示权限提示
  '--metrics-recording-only', // 启用指标记录，但禁用报告。
  '--password-store=basic', //使用基础的密码保存
  '--no-zygote', // 禁止使用 zygote 进程来派生子进程；相反，子进程将被 fork 并直接执行
  '--ignore-gpu-blacklist', // 忽略 GPU 黑名单，可能会提高渲染性能。
  '--mute-audio', // 静音音频
  '--disable-default-apps', //在首次运行时禁用默认应用程序的安装。这是在自动化测试期间使用的。
  '--disable-background-timer-throttling', // 从后台页面禁用定时器任务的任务调节
  '--disable-background-networking', //禁用在后台运行网络请求的几个子系统。这是在进行网络性能测试时使用的，以避免测量中的噪声
  '--disable-features=site-per-process', //禁用单渲染进程安全策略
  '--disable-renderer-backgrounding', // 防止渲染进程后台处理
  '--single-process', //单进程
]
