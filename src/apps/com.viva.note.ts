// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "囧次元",
  "id": "com.viva.note",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"不再显示\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "snapshotUrls": "https://i.gkd.li/i/12888361",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12888388",
            "https://i.gkd.li/i/12888419",
            "https://i.gkd.li/i/12888578",
            "https://i.gkd.li/i/12888647"
          ]
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12888945"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"第三方应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\" || text=\"下载应用\" || text=\"打开快应用\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13213661"
        }
      ]
    },
    {
      "name": "未分类-应用内通知",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[desc^=\"APP最新版本\"] > Button[desc=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888361",
            "https://i.gkd.li/i/12888389"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888388",
            "https://i.gkd.li/i/12888419",
            "https://i.gkd.li/i/12888578",
            "https://i.gkd.li/i/12888647"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/i/12888945",
          "key": 1
        },
        {
          "matches": [
            "[text=\"查看详情\"]",
            "ImageView < FrameLayout[childCount=1]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13213661",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-应用内通知",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "View[desc^=\"APP最新版本\"] > Button[desc=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888361",
            "https://i.gkd.li/import/12888389"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888388",
            "https://i.gkd.li/import/12888419",
            "https://i.gkd.li/import/12888578",
            "https://i.gkd.li/import/12888647"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/import/12888945",
          "key": 1
        },
        {
          "matches": [
            "[text=\"查看详情\"]",
            "ImageView < FrameLayout[childCount=1]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13213661",
          "key": 2
        }
      ]
    },
    {
      "name": "应用内通知",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "View[desc^=\"APP最新版本\"] > Button[desc=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888361",
            "https://i.gkd.li/import/12888389"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "应用内弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888388",
            "https://i.gkd.li/import/12888419",
            "https://i.gkd.li/import/12888578",
            "https://i.gkd.li/import/12888647"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/import/12888945",
          "key": 1
        },
        {
          "matches": [
            "[text=\"查看详情\"]",
            "ImageView < FrameLayout[childCount=1]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13213661",
          "key": 2
        }
      ]
    }
  ]
});
