// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百度网盘-三星版本",
  "id": "com.baidu.netdisk.samsung",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12738331"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12738331"
        },
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/cl_root\"] > [id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/buy_product_root\"] > [id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12738388"
        },
        {
          "matches": "View[childCount=2] > @TextView[text=\"\"][clickable=true] + TextView[text=\"专属福利\"][clickable=false]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12738404"
        },
        {
          "matches": "@TextView[text=\"\"][clickable=true] - TextView[text=\"去使用\"][clickable=true]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12738449"
        },
        {
          "matches": "[vid=\"close_probationary_guide_layout\"][visibleToUser=true]",
          "activityIds": "com.baidu.netdisk.ui.transfer.TransferListTabActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16423129",
          "exampleUrls": "https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4"
        },
        {
          "matches": "[vid=\"youa_guide_close\"][visibleToUser=true]",
          "activityIds": "com.baidu.netdisk.ui.transfer.TransferListTabActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/16423129",
          "exampleUrls": "https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4"
        },
        {
          "matches": "[vid=\"buy_product_root\"] > [vid=\"iv_close\"]",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12738388"
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"view_score_style\"] > [text=\"以后再说\"]",
          "activityIds": "com.baidu.netdisk.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14893286",
          "exampleUrls": "https://m.gkd.li/57941037/167a8392-23c8-4e84-a55f-4f91e7e560d8",
          "key": 0
        },
        {
          "matches": "[vid=\"view_score_style\"] > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/14893286",
          "exampleUrls": "https://m.gkd.li/57941037/167a8392-23c8-4e84-a55f-4f91e7e560d8",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14893280",
          "exampleUrls": "https://m.gkd.li/57941037/06ae328b-f852-407b-83ab-ec295d41baa4",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[上新【专辑】功能]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"add_widget_dialog_close\"]",
          "activityIds": "com.baidu.netdisk.filealbum.ui.activity.FileAlbumListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14893285",
          "exampleUrls": "https://m.gkd.li/57941037/256b5cad-a5ad-48e3-ba72-9c84447f2cac",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12738323",
          "exampleUrls": "https://m.gkd.li/57941037/e88a7ab4-0aeb-4472-a49b-3252da21ae33"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14596658",
          "exampleUrls": "https://m.gkd.li/57941037/7f1babd6-7da3-4733-aca9-80ddf3c0a84e"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12738323",
          "exampleUrls": "https://m.gkd.li/57941037/e88a7ab4-0aeb-4472-a49b-3252da21ae33"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14596658",
          "exampleUrls": "https://m.gkd.li/57941037/7f1babd6-7da3-4733-aca9-80ddf3c0a84e"
        }
      ]
    },
    {
      "name": "通知提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14893280",
          "exampleUrls": "https://m.gkd.li/57941037/06ae328b-f852-407b-83ab-ec295d41baa4",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-关闭购买套餐卡片广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/buy_product_root\"] > [id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-关闭[专属福利]卡片广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[text=\"\"][clickable=true] + TextView[text=\"专属福利\"][clickable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-关闭[今日福利]卡片广告",
      "desc": "会员-我的会员-底部卡片广告,点击[去使用]右侧的x关闭图标",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@TextView[text=\"\"][clickable=true] - TextView[text=\"去使用\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "desc": "点击右上角x图标按钮",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/cl_root\"] > [id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭购买套餐卡片广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.baidu.netdisk.samsung:id/buy_product_root\"] > [id=\"com.baidu.netdisk.samsung:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭[专属福利]卡片广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[text=\"\"][clickable=true] + TextView[text=\"专属福利\"][clickable=false]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭[今日福利]卡片广告",
      "desc": "会员-我的会员-底部卡片广告,点击[去使用]右侧的x关闭图标",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "@TextView[text=\"\"][clickable=true] - TextView[text=\"去使用\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
