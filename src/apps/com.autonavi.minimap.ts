// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "高德地图",
  "id": "com.autonavi.minimap",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16490985",
          "exampleUrls": "https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d",
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16490985",
          "exampleUrls": "https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d",
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
          "matches": [
            "[text=\"版本升级\" || id=\"com.autonavi.minimap:id/update_viewpager\"][visibleToUser=true]",
            "[text=\"取消\" || id=\"com.autonavi.minimap:id/iv_close\"][visibleToUser=true]"
          ],
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13379094",
            "https://i.gkd.li/i/13379426",
            "https://i.gkd.li/i/21981032"
          ]
        },
        {
          "matches": "@[id=\"com.autonavi.minimap:id/iv_close\"] + * > [text^=\"立即升级\"]",
          "key": 1,
          "name": "更新弹窗-1",
          "snapshotUrls": "https://i.gkd.li/i/13379094"
        },
        {
          "matches": "@[text=\"取消\"] + * + [text=\"去下载\"]",
          "key": 2,
          "name": "更新弹窗-2",
          "snapshotUrls": "https://i.gkd.li/i/13379426"
        },
        {
          "matches": [
            "[text=\"版本升级\" || vid=\"update_viewpager\"][visibleToUser=true]",
            "[text=\"取消\" || vid=\"iv_close\"][visibleToUser=true]"
          ],
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13379094",
            "https://i.gkd.li/i/13379426",
            "https://i.gkd.li/i/21981032"
          ]
        }
      ]
    },
    {
      "name": "功能类-截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"分享截图至\"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView <<n [id=\"com.autonavi.minimap:id/fragment_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13473388",
          "key": 0
        },
        {
          "matches": "[text=\"分享截图至\"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView",
          "key": 1
        },
        {
          "matches": "[text=\"分享截图至\"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView <<n [vid=\"fragment_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13473388",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-首页上方消息提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [id=\"com.autonavi.minimap:id/msgbox_popup_clear\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12642830",
          "exampleUrls": "https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17426322",
          "exampleUrls": "https://e.gkd.li/ca2dae5b-10d8-458e-9d83-fe04652ff074"
        },
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [vid=\"msgbox_popup_clear\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12642830",
          "exampleUrls": "https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a"
        }
      ]
    },
    {
      "name": "局部广告-首页签到卡片",
      "desc": "点击\"x\"",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*=\"签到\"||text*=\"成长值\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ViewGroup > ViewGroup > [desc=\"关闭\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14715295",
          "exampleUrls": "https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205"
        },
        {
          "matches": "ViewGroup[desc=\"图片\"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid=\"tab_container_id\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16960367",
          "exampleUrls": "https://e.gkd.li/132266f7-b7b8-4cac-9549-bcbe4314c893"
        },
        {
          "matches": "@ImageView[childCount=0] < ViewGroup[clickable=true] -2 * > View[text^=\"高德购票\" && text$=\"优惠\"] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16960157",
          "exampleUrls": "https://e.gkd.li/59408741-4847-4395-ace5-b1e14ee24cec"
        },
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"关闭\"] <<n [vid=\"ajx_view_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18627401",
          "exampleUrls": "https://e.gkd.li/018aa83b-3f0a-46b4-b084-a5e7a397ca68"
        },
        {
          "matches": [
            "[vid=\"btn_qrscan\"][desc=\"扫一扫\"]",
            "ViewGroup[desc.length>0] < ViewGroup + @[desc=\"关闭\"][clickable=true][visibleToUser=true] <<n [vid=\"quickservice\"]"
          ],
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14715295",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25660170",
          "exampleUrls": "https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205"
        },
        {
          "matches": "ViewGroup[desc=\"图片\"][childCount=2] > @ViewGroup[clickable=true] > ImageView[childCount=0] <<n [vid=\"tab_container_id\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/16960367"
        },
        {
          "matches": "ImageView < @ViewGroup[clickable=true] -2 * > View[text^=\"高德购票\" && text$=\"优惠\"] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16960157"
        },
        {
          "matches": "@[clickable=true] > [text=\"关闭\"][visibleToUser=true] <<n [vid=\"ajx_view_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/18627401"
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 6,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid=\"fragment_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 0,
          "name": "[欢迎]弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14800704",
            "https://i.gkd.li/i/17079025"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9"
        },
        {
          "matches": "[vid=\"main_map_msg_dialog_close\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 1,
          "name": "签到弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14809993",
          "exampleUrls": "https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5"
        },
        {
          "matches": "@ViewGroup[clickable=true] > View[visibleToUser=true][text^=\"关闭\"] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/22287641",
          "exampleUrls": "https://e.gkd.li/0a4e847f-b1b0-4667-982a-43f313305139"
        }
      ]
    },
    {
      "name": "功能类-一键点亮角落",
      "desc": "点击[一键点亮]",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"一键点亮\"] <2 @[clickable=true] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14881505",
          "exampleUrls": "https://m.gkd.li/57941037/1fd33208-e81d-4da6-a23c-4d562a8e0ae0",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-授权蓝牙",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -2 [text=\"授权蓝牙\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17002003",
          "exampleUrls": "https://e.gkd.li/8aef9184-d2b6-4c49-b729-82e6e76decdc",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-加油页面优惠券弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView < [desc=\"关闭\"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text=\"立即领取\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid=\"fragment_container\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 0,
          "name": "[欢迎]弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14800704",
          "exampleUrls": "https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9"
        },
        {
          "matches": "[vid=\"main_map_msg_dialog_close\"]",
          "activityIds": "com.autonavi.map.activity.NewMapActivity",
          "fastQuery": true,
          "key": 1,
          "name": "签到弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14809993",
          "exampleUrls": "https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5"
        }
      ]
    },
    {
      "name": "通知提示-地图横条广告",
      "desc": "关闭地图页面的横条广告和弹窗提示",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [id=\"com.autonavi.minimap:id/msgbox_popup_clear\"]",
          "key": 0,
          "name": "弹窗1",
          "snapshotUrls": "https://i.gkd.li/import/12642830"
        },
        {
          "matches": "@ImageView[text=null] <n [vid=\"activity_icon_bar\"]",
          "key": 1,
          "name": "弹窗2",
          "snapshotUrls": "https://i.gkd.li/i/17391938"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭欢迎弹窗、签到弹窗和加油优惠券弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid=\"fragment_container\"]",
          "key": 0,
          "name": "【欢迎】弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/14800704"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17079025"
        },
        {
          "matches": "[desc=\"弹窗\"] + [vid=\"main_map_msg_dialog_close\"]",
          "key": 1,
          "name": "签到弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14809993"
        },
        {
          "matches": "ImageView < @[desc=\"关闭\"][clickable=true] <n * > * >n View[text=\"立即领取\"]",
          "key": 2,
          "name": "加油页面优惠券弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642857"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] > View[text^=\"关闭\"][visibleToUser=true] <<n [vid=\"mapInteractiveRelativeLayout\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/22287641"
        }
      ]
    },
    {
      "name": "局部广告-首页-地图页面上方消息提醒",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [id=\"com.autonavi.minimap:id/msgbox_popup_clear\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-首页-签到卡片",
      "desc": "点击【x】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 14,
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*=\"签到\"||text*=\"成长值\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-加油页面-优惠券弹窗",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "@ImageView < [desc=\"关闭\"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text=\"立即领取\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "@[id=\"com.autonavi.minimap:id/iv_close\"] + * > [text^=\"立即升级\"]",
          "key": 0,
          "name": "更新弹窗-1",
          "snapshotUrls": "https://i.gkd.li/import/13379094"
        },
        {
          "matches": "@[text=\"取消\"] + * + [text=\"去下载\"]",
          "key": 1,
          "name": "更新弹窗-2",
          "snapshotUrls": "https://i.gkd.li/import/13379426"
        }
      ]
    },
    {
      "name": "截屏分享",
      "desc": "关闭截屏时app弹出的分享弹窗",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"分享截图至\"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-地图页面上方消息提醒",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "RelativeLayout[desc=\"弹窗\"] > [id=\"com.autonavi.minimap:id/msgbox_popup_clear\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-签到卡片",
      "desc": "点击【x】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 19,
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*=\"签到\"||text*=\"成长值\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "加油页面-优惠券弹窗",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "@ImageView < [desc=\"关闭\"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text=\"立即领取\"]",
          "key": 0
        }
      ]
    }
  ]
});
