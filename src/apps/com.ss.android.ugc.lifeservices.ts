// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "抖省省",
  "id": "com.ss.android.ugc.lifeservices",
  "groups": [
    {
      "name": "功能类-自动[放弃支付]",
      "desc": "弹窗-点击[放弃支付]",
      "key": 0,
      "rules": [
        {
          "matches": "[visibleToUser=true][desc^=\"放弃支付\"]",
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.bytedance.locallife.page.pdp.LifePdpActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/30941609",
            "https://i.gkd.li/i/31027911"
          ],
          "exampleUrls": "https://e.gkd.li/f93e7986-a67c-4f9f-a553-82d683a0d42e",
          "key": 0
        }
      ]
    }
  ]
});
