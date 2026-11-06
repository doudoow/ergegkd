// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快手",
  "id": "com.smile.gifmaker",
  "groups": [
    {
      "name": "全屏广告-首页红包弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "key": 0,
          "name": "老友回归红包弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708649",
            "https://i.gkd.li/i/12708660"
          ]
        },
        {
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "key": 1,
          "name": "限时高额奖励弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12708681"
        }
      ]
    },
    {
      "name": "局部广告-首页左侧红包悬浮控件",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/pendant_mask_bg\"] + [id=\"com.smile.gifmaker:id/pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708671",
            "https://i.gkd.li/i/12708676"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"pendant_mask_bg\"] + [vid=\"pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708671",
            "https://i.gkd.li/i/12708676"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-推荐关注",
      "desc": "自动点击\"关闭/隐藏\"",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "key": 0,
          "name": "消息页面-你可能感兴趣的人",
          "snapshotUrls": "https://i.gkd.li/i/12708707"
        },
        {
          "matches": "ViewGroup[childCount=3] > [text=\"隐藏\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "name": "我的页面-你可能感兴趣的人",
          "snapshotUrls": "https://i.gkd.li/i/14001536"
        },
        {
          "matches": "[text=\"朋友推荐\"] + [vid=\"close_btn\"]",
          "fastQuery": true,
          "key": 2,
          "name": "朋友推荐弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14232217"
        },
        {
          "matches": "[vid=\"close_pymk\"]",
          "key": 3,
          "name": "消息页面-你可能感兴趣的人",
          "snapshotUrls": "https://i.gkd.li/i/12708707"
        },
        {
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "fastQuery": true,
          "key": 4,
          "name": "消息页面-你可能感兴趣的人",
          "snapshotUrls": "https://i.gkd.li/i/12708707"
        }
      ]
    },
    {
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"close\"] +2 * > [text=\"喜欢就给个好评吧\"]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/14343547",
          "exampleUrls": "https://m.gkd.li/57941037/da412e0f-47db-4cc0-8821-184c6ba42882",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-直播间广告",
      "desc": "关闭直播间的全屏广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[visibleToUser=true][text=\"幸运奖池\"] <<n [vid=\"webView\"]",
          "action": "back",
          "activityIds": "com.kuaishou.live.core.basic.activity.LiveSlideActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15629334",
          "exampleUrls": "https://m.gkd.li/57941037/338df1c2-8789-435b-8970-c837b00fc0f5",
          "key": 0
        },
        {
          "matches": "[text=\"幸运奖池\"][visibleToUser=true] <<n [vid=\"webView\"]",
          "action": "back",
          "activityIds": "com.kuaishou.live.core.basic.activity.LiveSlideActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15629334",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@FrameLayout[desc$=\"作品\"][longClickable=true][visibleToUser=true] >(4,5) [text$=\"旗舰店\" || text=\"广告\"]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24022468",
            "https://i.gkd.li/i/24024010"
          ],
          "exampleUrls": "https://e.gkd.li/f199ffaf-9ff8-49f5-a3fe-3fc5bbae8f7c"
        },
        {
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/24024009",
            "https://i.gkd.li/i/24024011"
          ],
          "exampleUrls": "https://e.gkd.li/a93df9c1-7abe-4bd0-9d7b-ca6cce5f2286",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-红包弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "name": "老友回归红包弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708649",
            "https://i.gkd.li/i/12708660"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "name": "限时高额奖励弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708681"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-首页-左侧红包悬浮控件",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/pendant_mask_bg\"] + [id=\"com.smile.gifmaker:id/pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708671",
            "https://i.gkd.li/i/12708676"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-你可能感兴趣的人",
      "desc": "自动点击【关闭】",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12708620",
            "https://i.gkd.li/i/12708707"
          ]
        },
        {
          "matches": "ViewGroup[childCount=3] > [text=\"隐藏\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14001536"
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "key": 0,
          "name": "老友回归红包弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/12708649",
            "https://i.gkd.li/i/12708660"
          ]
        },
        {
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "key": 1,
          "name": "限时高额奖励弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12708681"
        },
        {
          "matches": "ImageView[width<128] < [childCount=1] < @[clickable=true] - HorizontalScrollView >5 [text=\"恭喜你获得\"]",
          "activityIds": "com.yxcorp.plugin.search.SearchActivity",
          "fastQuery": true,
          "key": 2,
          "name": "新人红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/32433383"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]",
          "key": 0
        },
        {
          "matches": "[id=\"com.smile.gifmaker:id/set_teenage_mode\"] + [id=\"com.smile.gifmaker:id/positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/12708609",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-左侧红包悬浮控件",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/pendant_mask_bg\"] + [id=\"com.smile.gifmaker:id/pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12708671",
            "https://i.gkd.li/import/12708676"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-你可能感兴趣的人",
      "desc": "自动点击【关闭】",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]",
          "key": 0
        },
        {
          "matches": "[id=\"com.smile.gifmaker:id/set_teenage_mode\"] + [id=\"com.smile.gifmaker:id/positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/12708609",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-红包弹窗",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]",
          "name": "老友回归红包弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12708649",
            "https://i.gkd.li/import/12708660"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text=\"立即领取\"]",
          "name": "限时高额奖励弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12708681"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "首页-左侧红包悬浮控件",
      "desc": "自动点击x按钮",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/pendant_mask_bg\"] + [id=\"com.smile.gifmaker:id/pendant_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12708671",
            "https://i.gkd.li/import/12708676"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "你可能感兴趣的人",
      "desc": "自动点击【关闭】",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.smile.gifmaker:id/close_pymk\"]",
          "key": 0
        }
      ]
    }
  ]
});
