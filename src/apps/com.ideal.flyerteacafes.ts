// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞客",
  "id": "com.ideal.flyerteacafes",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.ideal.flyerteacafes:id/close\"] - FrameLayout > [id=\"com.ideal.flyerteacafes:id/iv_adv_tip\"]",
          "activityIds": "com.ideal.flyerteacafes.ui.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466119",
          "key": 0
        },
        {
          "matches": "@[vid=\"close\" || vid=\"iv_close\"] - FrameLayout > [vid=\"iv_adv_tip\"]",
          "activityIds": [
            ".ui.HomeActivity",
            ".ui.activity.thread.NormalThreadActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13466119",
            "https://i.gkd.li/i/27550981"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.ideal.flyerteacafes:id/close\"] - FrameLayout > [id=\"com.ideal.flyerteacafes:id/tv_time_down\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击x掉",
      "key": 2,
      "rules": [
        {
          "matches": "@TextView[visibleToUser=true] <3 View < [id=null][childCount=3] <n View[childCount>10] <6 [id=\"comment-list\"] <n View[childCount>10] < WebView < WebView < [vid=\"webContainer\"]",
          "activityIds": ".ui.activity.thread.NormalThreadActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27529035",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.ideal.flyerteacafes:id/close\"] - FrameLayout > [id=\"com.ideal.flyerteacafes:id/tv_time_down\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.ideal.flyerteacafes:id/close\"] - FrameLayout > [id=\"com.ideal.flyerteacafes:id/tv_time_down\"]",
          "key": 0
        }
      ]
    }
  ]
});
