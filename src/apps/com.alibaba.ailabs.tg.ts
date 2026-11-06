// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天猫精灵",
  "id": "com.alibaba.ailabs.tg",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.ailabs.tg:id/ll_download\"] + [id=\"com.alibaba.ailabs.tg:id/va_dialog_cancel\"]",
          "activityIds": ".activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13296332",
          "key": 0
        },
        {
          "matches": "[id=\"com.alibaba.ailabs.tg:id/ll_download\"] + [id=\"com.alibaba.ailabs.tg:id/va_dialog_cancel\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"ll_download\"] + [vid=\"va_dialog_cancel\"]",
          "activityIds": ".activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13296332",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-超级会员弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > LinearLayout > [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.9444",
            "top": "width * 1.0583"
          },
          "activityIds": "com.alibaba.ailabs.flutter.container.FlutterPaymentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14443874",
          "exampleUrls": "https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.ailabs.tg:id/ll_download\"] + [id=\"com.alibaba.ailabs.tg:id/va_dialog_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
