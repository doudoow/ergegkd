// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "APKPure",
  "id": "com.apkpure.aegon",
  "groups": [
    {
      "name": "全屏广告-热门推荐关闭",
      "desc": "关闭应用推广",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@RelativeLayout[clickable=true][visibleToUser=true] - [text=\"精选必备好应用\"] <2 RelativeLayout < LinearLayout < [id=\"android:id/content\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466647",
          "key": 0
        },
        {
          "matches": "@RelativeLayout[clickable=true][visibleToUser=true] - [text=\"精选必备好应用\"] <2 RelativeLayout < LinearLayout < [id=\"android:id/content\"]",
          "activityIds": ".main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466647",
          "key": 1
        },
        {
          "matches": "[text=\"精选必备好应用\"] + [name=\"android.widget.RelativeLayout\"] > [name=\"android.widget.ImageView\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/import/13466647",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-更新与已安装界面-点击[查看更多]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] > [text=\"查看更多\"][visibleToUser=true]",
          "activityIds": [
            "com.apkpure.aegon.main.activity.MainTabActivity",
            "com.apkpure.aegon.main.activity.AppManagerActivity",
            "com.apkpure.aegon.cms.activity.CommonActivity",
            "com.apkpure.aegon.main.activity.AppMoreActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15469126",
          "key": 0
        },
        {
          "matches": "@ViewGroup[clickable=true] > [text=\"查看更多\"][visibleToUser=true]",
          "activityIds": [
            ".main.activity.MainTabActivity",
            ".main.activity.AppManagerActivity",
            ".cms.activity.CommonActivity",
            ".main.activity.AppMoreActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/15469126",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-更新界面软件推荐",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout >3 [text=\"AD\"][visibleToUser=true]",
          "key": 0,
          "name": "点击三点图标",
          "snapshotUrls": "https://i.gkd.li/i/13466329"
        },
        {
          "matches": "@LinearLayout[clickable=true] >n [text=\"关闭\"][visibleToUser=true]",
          "preKeys": 0,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/13466610",
            "https://i.gkd.li/i/15542026"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-添加桌面快捷方式",
      "desc": "下次添加",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.apkpure.aegon:id/arg\"][text=\"下次添加\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13416401",
          "key": 0
        },
        {
          "matches": "[vid=\"arg\"][text=\"下次添加\"]",
          "activityIds": ".main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13416401",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @LinearLayout[clickable=true][visibleToUser=true] < LinearLayout < LinearLayout < LinearLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": ".main.activity.MainTabActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18587607",
          "exampleUrls": "https://e.gkd.li/10d6f26e-cbd1-4159-914b-68c39ff05436",
          "key": 0
        },
        {
          "matches": "@ImageView[index=0][childCount=0][clickable=true][visibleToUser=true] < ViewGroup[childCount=2] < [id=\"android:id/content\"]",
          "activityIds": ".main.activity.AppManagerActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18587646",
          "exampleUrls": "https://e.gkd.li/b8201abb-359e-4fc8-82de-0e3784278cd2"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text=\"正在下载\" || text=\"正在更新\"]",
          "activityIds": ".v2.app.detail.AppDetailV2Activity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18587702",
            "https://i.gkd.li/i/18587507"
          ],
          "exampleUrls": "https://e.gkd.li/214effcb-76c5-4cc0-b4c8-40c805331fe8"
        },
        {
          "matches": "@ImageView[clickable=true] <2 RelativeLayout[childCount=2] - FrameLayout >5 [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".plugin.runtime.PluginDefaultProxyActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24605359"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] <3 RelativeLayout[childCount=4] < FrameLayout <2 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".main.activity.MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18587501",
          "exampleUrls": "https://e.gkd.li/1ba2de53-b533-47dc-87a4-a701d2bcacd7",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[desc=\"closeButton\"][visibleToUser=true] - WebView >3 [text=\"广告\"]",
          "activityIds": ".main.activity.AppManagerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18587514",
          "exampleUrls": "https://e.gkd.li/afc307a6-8271-4776-b7d5-60bd999d0fe5"
        },
        {
          "matches": "[vid=\"anythink_myoffer_banner_close\"][visibleToUser=true]",
          "activityIds": ".main.activity.AppManagerActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18587745",
          "exampleUrls": "https://e.gkd.li/ce6a779c-454d-4a71-9d54-1401e615bbf7"
        }
      ]
    },
    {
      "name": "局部广告-电报频道推广横幅",
      "desc": "点击关闭",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true][visibleToUser=true] - LinearLayout >3 [text=\"Join\"]",
          "activityIds": [
            ".main.activity.MainTabActivity",
            ".main.activity.AppManagerActivity",
            ".v2.app.detail.AppDetailV2Activity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/18587504",
            "https://i.gkd.li/i/18587515",
            "https://i.gkd.li/i/18587775"
          ],
          "exampleUrls": "https://e.gkd.li/088ca8e8-5442-4b60-9ce9-0e6dd7d94304",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-热门推荐关闭",
      "desc": "关闭应用推广",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"精选必备好应用\"] + [name=\"android.widget.RelativeLayout\"] > [name=\"android.widget.ImageView\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466647",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-更新与已安装界面-查看更多",
      "desc": "在更新界面自动点击查看更多按钮，展开所有应用",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "ViewGroup > [text=\"查看更多\"]",
          "activityIds": [
            "com.apkpure.aegon.main.activity.MainTabActivity",
            "com.apkpure.aegon.main.activity.AppManagerActivity",
            "com.apkpure.aegon.cms.activity.CommonActivity",
            "com.apkpure.aegon.main.activity.AppMoreActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13466329",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-更新界面-软件推荐",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout >3 [text=\"AD\"]",
          "key": 0,
          "name": "点击三点图标",
          "snapshotUrls": "https://i.gkd.li/i/13466329"
        },
        {
          "matches": "TextView[text=\"关闭\"]",
          "preKeys": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13466610",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-添加桌面快捷方式",
      "desc": "下次添加",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.apkpure.aegon:id/arg\"][text=\"下次添加\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13416401",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-更新与已安装界面-查看更多",
      "desc": "在更新界面自动点击查看更多按钮，展开所有应用",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ViewGroup > [text=\"查看更多\"]",
          "activityIds": [
            "com.apkpure.aegon.main.activity.MainTabActivity",
            "com.apkpure.aegon.main.activity.AppManagerActivity",
            "com.apkpure.aegon.cms.activity.CommonActivity",
            "com.apkpure.aegon.main.activity.AppMoreActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13466329",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-更新界面-软件推荐",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout >3 [text=\"AD\"]",
          "key": 0,
          "name": "点击三点图标",
          "snapshotUrls": "https://i.gkd.li/import/13466329"
        },
        {
          "matches": "TextView[text=\"关闭\"]",
          "preKeys": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/import/13466610",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-添加桌面快捷方式",
      "desc": "下次添加",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.apkpure.aegon:id/arg\"][text=\"下次添加\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/import/13416401",
          "key": 0
        }
      ]
    },
    {
      "name": "热门推荐关闭",
      "desc": "关闭应用推广",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"精选必备好应用\"] + [name=\"android.widget.RelativeLayout\"] > [name=\"android.widget.ImageView\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/import/13466647",
          "key": 0
        }
      ]
    },
    {
      "name": "更新与已安装界面-查看更多",
      "desc": "在更新界面自动点击查看更多按钮，展开所有应用",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "ViewGroup > [text=\"查看更多\"]",
          "activityIds": [
            "com.apkpure.aegon.main.activity.MainTabActivity",
            "com.apkpure.aegon.main.activity.AppManagerActivity",
            "com.apkpure.aegon.cms.activity.CommonActivity",
            "com.apkpure.aegon.main.activity.AppMoreActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13466329",
          "key": 0
        }
      ]
    },
    {
      "name": "更新界面-软件推荐",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "@ImageView - RelativeLayout >3 [text=\"AD\"]",
          "key": 0,
          "name": "点击三点图标",
          "snapshotUrls": "https://i.gkd.li/import/13466329"
        },
        {
          "matches": "TextView[text=\"关闭\"]",
          "preKeys": 0,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/import/13466610",
          "key": 1
        }
      ]
    },
    {
      "name": "添加桌面快捷方式",
      "desc": "下次添加",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.apkpure.aegon:id/arg\"][text=\"下次添加\"]",
          "activityIds": "com.apkpure.aegon.main.activity.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/import/13416401",
          "key": 0
        }
      ]
    }
  ]
});
