// 此处安装版本为 1.8.0
const puppeteer = require('puppeteer');

async function giteeUpdate() {
  const browser = await puppeteer.launch({
      // 此处可以使用 false 有头模式进行调试, 调试完注释即可
        headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://gitee.com/login');
  // 1. 选中账号控件
  let accountElements = await page.$x('//*[@id="user_login"]') // 此处使用 xpath 寻找控件，下同
  // 2. 填入账号
  await accountElements[0].type('1016280226@qq.com') // 码云登录账户
  // 3. 选中密码控件
  let pwdElements = await page.$x('//*[@id="user_password"]')
  // 4. 填入密码
  await pwdElements[0].type('cw123789') // 码云登录密码
  // 5. 点击登录
  let loginButtons = await page.$x('//*[@id="new_user"]/div[2]/div/div/div[4]/input')
  await loginButtons[0].click()
  // 6. 等待登录成功
  await page.waitFor(1000)
  await page.goto('https://gitee.com/calvinluo/calvin-docs/pages'); // 自己的码云仓库的pages页面地址 比如： https://gitee.com/xiaocjee/xiaocjee/pages
  // 7.1. 监听步骤 7 中触发的确认弹框，并点击确认
  await page.on('dialog', async dialog => {
      console.log('confirm...')
      dialog.accept();
  })
  // 7. 点击更新按钮，并弹出确认弹窗
  // let updateButtons = await page.$x('//*[@id="pages-branch"]/div[7]')
  // let updateButtons = await page.$x('//*[@class="start_deploy"]/div[7]')
  // await updateButtons[0].click()

  page.click('div.update_deploy')
  // 8. 轮询并确认是否更新完毕
  while (true) {
      await page.waitFor(2000)
      try {
          // 8.1 获取更新状态标签
          deploying = await page.$x('//*[@id="pages_deploying"]')
          if (deploying.length > 0) {
              console.log('update...')
          } else {
              console.log('finish..')
              break;
          }
      } catch (error) {
          break;
      }
  }
  await page.waitFor(500);
  // 10.更新完毕，关闭浏览器
  browser.close();
}

giteeUpdate();