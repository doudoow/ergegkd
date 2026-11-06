// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天翼云盘",
  "id": "com.cn21.ecloud",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid=\"content_frame\"]",
          "activityIds": "com.cn21.ecloud.activity.MainPageActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12865488",
            "https://i.gkd.li/i/16653930",
            "https://i.gkd.li/i/16647901"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid=\"content_frame\"]",
          "activityIds": ".activity.MainPageActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12865488",
            "https://i.gkd.li/i/16653930",
            "https://i.gkd.li/i/16647901"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cn21.ecloud:id/ivCancel\"]",
          "activityIds": ".activity.MainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13399488",
          "key": 0
        },
        {
          "matches": "[id=\"com.cn21.ecloud:id/ivCancel\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"ivCancel\"]",
          "activityIds": ".activity.MainPageActivity",
          "snapshotUrls": "https://i.gkd.li/i/13399488",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.cn21.ecloud:id/content_frame\"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.cn21.ecloud:id/content_frame\"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.cn21.ecloud:id/ivCancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
