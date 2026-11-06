// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧北航",
  "id": "cn.edu.buaa.wxwork",
  "groups": [
    {
      "name": "功能类-扫码后自动确认登录",
      "desc": "点击[确认登录]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"确认登录\"][clickable=true]",
          "activityIds": [
            "com.tencent.wework.common.web.JsWebActivity",
            "com.tencent.wework.launch.WwMainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16784272",
            "https://i.gkd.li/i/16784259"
          ],
          "exampleUrls": "https://e.gkd.li/501ba684-b4a5-40e8-9e24-c61048569667",
          "key": 0
        }
      ]
    }
  ]
});
