// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "彩云天气",
  "id": "com.nowcasting.activity",
  "groups": [
    {
      "name": "全屏广告-VIP弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.nowcasting.activity:id/iv_close\"]",
          "activityIds": "com.nowcasting.activity.WeatherActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13405130",
          "key": 0
        },
        {
          "matches": "[text=\"开心收下\"] + [id=\"com.nowcasting.activity:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13405130",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".WeatherActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13405130",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13405131",
            "https://i.gkd.li/i/14814345"
          ]
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <5 ViewGroup + ViewGroup [text=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14814374"
        },
        {
          "matches": "[vid=\"entrance_image\"] + [vid=\"close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16965108",
          "exampleUrls": "https://e.gkd.li/bd53a023-f83a-45ae-b58e-c7369f29bb2e"
        },
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[childCount>5] > FrameLayout[childCount=1] > ImageView",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13405131",
            "https://i.gkd.li/i/14814345"
          ]
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] <<n ViewGroup +n ViewGroup [text=\"广告\"]",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14814374"
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13690822"
        },
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_uninterested\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13690830"
        },
        {
          "matches": "[vid=\"ll_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13690822"
        },
        {
          "matches": "[vid=\"ll_uninterested\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13690830"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.nowcasting.activity:id/jad_feed_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13690826"
        },
        {
          "matches": "@FrameLayout[visibleToUser=true] +2 * > [text=\"广告\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14814348"
        },
        {
          "matches": "[vid=\"jad_feed_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13690826"
        }
      ]
    },
    {
      "name": "功能类-点击收起顶部工具栏",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2][visibleToUser=true] > [vid=\"fl_arrow\"][visibleToUser=true]",
          "activityIds": "com.nowcasting.activity.WeatherActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14814347",
            "https://i.gkd.li/i/14814412"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/5bdf4f45-d66d-441e-a2ce-f32d5fc40796",
          "key": 0
        },
        {
          "matches": "ViewGroup[childCount=2][visibleToUser=true] > [vid=\"fl_arrow\"][visibleToUser=true]",
          "activityIds": ".WeatherActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14814347",
            "https://i.gkd.li/i/14814412"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/5bdf4f45-d66d-441e-a2ce-f32d5fc40796",
          "key": 1
        }
      ]
    },
    {
      "name": "综合广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13690822"
        },
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_uninterested\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13690830"
        },
        {
          "matches": "[id=\"com.nowcasting.activity:id/jad_feed_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13690826"
        },
        {
          "matches": "@FrameLayout[visibleToUser=true] +2 * > [text=\"广告\"][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14814348"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告_VIP",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"开心收下\"] + [id=\"com.nowcasting.activity:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13405130",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告_外部应用",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[id=null][text^=\"立即\" || text^=\"领取\" || text^=\"了解\"][text.length=4]",
            "[id=\"android:id/content\"] >2 FrameLayout[childCount=3||childCount=2||childCount=4] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13405131",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-插页广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/jad_feed_close\"]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13690826"
        },
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/ll_close\"]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13690822"
        },
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/ll_uninterested\"]"
          ],
          "preKeys": 1,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13690830"
        }
      ]
    },
    {
      "name": "弹窗广告_VIP",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"开心收下\"] + [id=\"com.nowcasting.activity:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13405130",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告_外部应用",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[id=null][text^=\"立即\" || text^=\"领取\" || text^=\"了解\"][text.length=4]",
            "[id=\"android:id/content\"] >2 FrameLayout[childCount=3||childCount=2||childCount=4] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13405131",
          "key": 0
        }
      ]
    },
    {
      "name": "插页广告",
      "enable": false,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/jad_feed_close\"]"
          ],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13690826"
        },
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/ll_close\"]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13690822"
        },
        {
          "matches": [
            "[id=\"com.nowcasting.activity:id/ll_uninterested\"]"
          ],
          "preKeys": 1,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13690830"
        }
      ]
    }
  ]
});
