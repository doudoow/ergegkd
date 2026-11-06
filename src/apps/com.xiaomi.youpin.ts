// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米有品",
  "id": "com.xiaomi.youpin",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "WebView[text=\"有品\"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]",
          "activityIds": "com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964897",
            "https://i.gkd.li/i/12836727"
          ],
          "key": 0
        },
        {
          "matches": "WebView[text=\"有品\"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]",
          "activityIds": ".globalpopwindow.popwindow.PopWindowActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964897",
            "https://i.gkd.li/i/12836727"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示-版本升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.youpin:id/ypd_alert_close_image\"]",
          "activityIds": ".globalpopwindow.popwindow.PopWindowActivity",
          "snapshotUrls": "https://i.gkd.li/i/12836775",
          "key": 0
        },
        {
          "matches": "[vid=\"ypd_alert_close_image\"]",
          "activityIds": ".globalpopwindow.popwindow.PopWindowActivity",
          "snapshotUrls": "https://i.gkd.li/i/12836775",
          "key": 1
        },
        {
          "matches": "[id=\"com.xiaomi.youpin:id/ypd_alert_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12836775"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-主页贴片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_float_close\"]",
          "activityIds": "com.xiaomi.youpin.activity.YouPinMainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15879481",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_float_close\"]",
          "activityIds": ".activity.YouPinMainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15879481",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image <2 View[childCount=2] < [id=\"app\"] < [text=\"有品\"] < * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12836727"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@Image <2 View[childCount=2] < [id=\"app\"] < [text=\"有品\"] < * < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12836727"
          ],
          "key": 0
        }
      ]
    }
  ]
});
