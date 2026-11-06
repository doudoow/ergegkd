// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "我爱卡",
  "id": "com.woaika.kashen",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "desc": "点击\"暂不\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/button2\"][text=\"暂不\"]",
          "activityIds": "com.woaika.kashen.ui.WIKHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14070846",
          "exampleUrls": "https://m.gkd.li/57941037/ae172e3f-42e2-4de2-8bd5-de7eb624c359",
          "key": 0
        },
        {
          "matches": "[id=\"android:id/button2\"][text=\"暂不\"]",
          "activityIds": ".ui.WIKHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14070846",
          "exampleUrls": "https://m.gkd.li/57941037/ae172e3f-42e2-4de2-8bd5-de7eb624c359",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-请求位置、存储权限",
      "desc": "点击\"我知道了\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tvPermissionDescDialogConfirm\"]",
          "snapshotUrls": "https://i.gkd.li/i/14070836",
          "exampleUrls": "https://m.gkd.li/57941037/6faf1f01-5b77-414b-91d8-98dcb5673f7c",
          "key": 0
        }
      ]
    }
  ]
});
