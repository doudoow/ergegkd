// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淘特",
  "id": "com.taobao.litetao",
  "groups": [
    {
      "name": "更新提示-版本升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "activityIds": [
            "com.taobao.ltao.maintab.MainFrameActivity",
            ".launcher.ALiFlutterActivityCompat"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12843615",
            "https://i.gkd.li/i/12843614"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.taobao.litetao:id/root_layout\"] > TextView[text^=\"还剩\"&&text$=\"秒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-版本升级弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本升级弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "key": 0
        }
      ]
    }
  ]
});
