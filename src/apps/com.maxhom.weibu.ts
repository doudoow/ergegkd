// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "暮瑟",
  "id": "com.maxhom.weibu",
  "groups": [
    {
      "name": "局部广告-交友页面底部广告",
      "key": 0,
      "rules": [
        {
          "matches": [
            "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"com.maxhom.weibu:id/flAd\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".tool.home.activity.NewMainActivity",
            ".WelcomeActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ]
        },
        {
          "matches": "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"]",
          "activityIds": ".tool.home.activity.NewMainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13702305",
            "https://i.gkd.li/i/13702339",
            "https://i.gkd.li/i/13702345"
          ]
        },
        {
          "matches": [
            "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"flAd\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".tool.home.activity.NewMainActivity",
            ".WelcomeActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ]
        },
        {
          "matches": "[vid=\"anythink_myoffer_banner_close\"]",
          "activityIds": ".tool.home.activity.NewMainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13702305",
            "https://i.gkd.li/i/13702339",
            "https://i.gkd.li/i/13702345"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-漂流瓶页面提示弹窗",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.maxhom.weibu:id/ivClose\"]",
          "activityIds": [
            ".tool.home.activity.ToolBottleActivity",
            ".tool.home.activity.NewMainActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13377649",
            "https://i.gkd.li/i/13457015"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] + FrameLayout >2 [text=\"立即下载\"]",
          "activityIds": ".tool.home.activity.NewMainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13377611"
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": [
            ".tool.home.activity.ToolBottleActivity",
            ".tool.home.activity.NewMainActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13377649",
            "https://i.gkd.li/i/13457015"
          ]
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "自动点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"去设置\"] + [text=\"取消\"]",
          "activityIds": [
            "com.maxhom.weibu.tool.home.activity.ToolBottleActivity",
            "com.maxhom.weibu.tool.msg.MyBottleActivity",
            "com.maxhom.weibu.tool.home.activity.NewMainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13377685",
            "https://i.gkd.li/i/13457033",
            "https://i.gkd.li/i/13457038"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"去设置\"] +n [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377685",
            "https://i.gkd.li/i/13457033",
            "https://i.gkd.li/i/13457038"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"去设置\"] + [text=\"取消\"]",
          "activityIds": [
            ".tool.home.activity.ToolBottleActivity",
            ".tool.msg.MyBottleActivity",
            ".tool.home.activity.NewMainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13377685",
            "https://i.gkd.li/i/13457033",
            "https://i.gkd.li/i/13457038"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "综合广告-底部广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "key": 0,
          "name": "类型1-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377607",
            "https://i.gkd.li/i/13377810",
            "https://i.gkd.li/i/13728552"
          ]
        },
        {
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "preKeys": 0,
          "key": 1,
          "name": "类型1-点击弹出窗口的X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13377611"
          ]
        },
        {
          "matches": [
            "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"]"
          ],
          "key": 2,
          "name": "类型2-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/i/13702305",
            "https://i.gkd.li/i/13702339",
            "https://i.gkd.li/i/13702345"
          ]
        }
      ]
    },
    {
      "name": "分段广告-交友页面底部广告",
      "desc": "关闭交友页面底部出现的广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "key": 0,
          "name": "类型1-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377607",
            "https://i.gkd.li/import/13377810",
            "https://i.gkd.li/import/13728552"
          ]
        },
        {
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "preKeys": 0,
          "key": 1,
          "name": "类型1-点击弹出窗口的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377611"
          ]
        },
        {
          "matches": [
            "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"][visibleToUser=true]"
          ],
          "key": 2,
          "name": "类型2-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13702305",
            "https://i.gkd.li/import/13702339",
            "https://i.gkd.li/import/13702345"
          ]
        }
      ]
    },
    {
      "name": "通知提示-漂流瓶页面提示弹窗",
      "desc": "关闭漂流瓶功能页面的各类提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.maxhom.weibu:id/ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377649",
            "https://i.gkd.li/import/13457015"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-交友-底部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "key": 0,
          "name": "类型1-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377607",
            "https://i.gkd.li/import/13377810",
            "https://i.gkd.li/import/13728552"
          ]
        },
        {
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "preKeys": 0,
          "key": 1,
          "name": "类型1-点击弹出窗口的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377611"
          ]
        },
        {
          "matches": [
            "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"]"
          ],
          "key": 2,
          "name": "类型2-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13702305",
            "https://i.gkd.li/import/13702339",
            "https://i.gkd.li/import/13702345"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-漂流瓶-提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.maxhom.weibu:id/ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377649",
            "https://i.gkd.li/import/13457015"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-漂流瓶-定位弹窗",
      "desc": "自动点击取消",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"去设置\"] +n [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377685",
            "https://i.gkd.li/import/13457033",
            "https://i.gkd.li/import/13457038"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "交友-底部广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": [
            "TextView[text.length>0] < FrameLayout + FrameLayout > ImageView"
          ],
          "key": 0,
          "name": "类型1-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377607",
            "https://i.gkd.li/import/13377810",
            "https://i.gkd.li/import/13728552"
          ]
        },
        {
          "matches": "[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView",
          "preKeys": 0,
          "key": 1,
          "name": "类型1-点击弹出窗口的X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377611"
          ]
        },
        {
          "matches": [
            "[id=\"com.maxhom.weibu:id/anythink_myoffer_banner_close\"]"
          ],
          "key": 2,
          "name": "类型2-点击右侧X",
          "snapshotUrls": [
            "https://i.gkd.li/import/13702305",
            "https://i.gkd.li/import/13702339",
            "https://i.gkd.li/import/13702345"
          ]
        }
      ]
    },
    {
      "name": "漂流瓶-提示弹窗",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.maxhom.weibu:id/ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377649",
            "https://i.gkd.li/import/13457015"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "漂流瓶-定位弹窗",
      "desc": "自动点击取消",
      "enable": false,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"去设置\"] +n [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13377685",
            "https://i.gkd.li/import/13457033",
            "https://i.gkd.li/import/13457038"
          ],
          "key": 0
        }
      ]
    }
  ]
});
