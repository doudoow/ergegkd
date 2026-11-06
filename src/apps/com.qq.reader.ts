// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ阅读",
  "id": "com.qq.reader",
  "groups": [
    {
      "name": "局部广告-右下角悬浮卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"operating_activity_close_view\"]",
          "activityIds": [
            "com.qq.reader.activity.MainActivity",
            "com.qq.reader.activity.MainFlutterActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14140100",
            "https://i.gkd.li/i/16517211"
          ],
          "exampleUrls": "https://e.gkd.li/29b1cea7-6984-4d51-b1a0-f5ffd1b0d727",
          "key": 0
        },
        {
          "matches": "[vid=\"operating_activity_close_view\"]",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.MainFlutterActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14140100",
            "https://i.gkd.li/i/16517211"
          ],
          "exampleUrls": "https://e.gkd.li/29b1cea7-6984-4d51-b1a0-f5ffd1b0d727",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示-内测邀请弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"upgrade_dialog_close_btn\"][clickable=true]",
          "activityIds": "com.tencent.upgrade.ui.UpgradeDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/14376088",
          "exampleUrls": "https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e",
          "key": 0
        },
        {
          "matches": "[vid=\"upgrade_dialog_close_btn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14376088",
          "exampleUrls": "https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-阅读页面广告",
      "desc": "点击关闭-点击[关闭本条广告]",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"关闭广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14767123",
          "exampleUrls": "https://m.gkd.li/57941037/70e15d7d-0911-44e7-b0d6-a8e74c00b8b1"
        },
        {
          "matches": "[vid=\"adv_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14767126",
          "exampleUrls": "https://m.gkd.li/57941037/eb2bca3c-abbc-4666-b505-cdaeeec6a839"
        },
        {
          "matches": "[vid=\"view_close_ad_btn_bg\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14767165",
            "https://i.gkd.li/i/14767124"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/c985da66-c2cc-4400-bb61-8f7ee6dbba11"
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
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14978239"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/32436978",
          "exampleUrls": "https://e.gkd.li/cf0112a6-887e-4dd3-ba53-6dfdb592bf03"
        },
        {
          "matches": "TextView[width<200] - @View[clickable=true][width<170 && height<170] - FrameLayout[childCount=1][height=getPrev(2).height] <2 [childCount=4] <2 FrameLayout < [vid=\"splash_container\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/32436980",
          "exampleUrls": "https://e.gkd.li/ef7dc5c7-ad3d-45e8-8fa2-ae9a4c279052"
        },
        {
          "matches": "@View[clickable=true][width<170 && height<170] - FrameLayout[height=getPrev(1).height] <2 [childCount=3] < [vid=\"splash_container\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/33926416"
        },
        {
          "matches": "@ImageView[width<140 && height<140][visibleToUser=true][vid=null][text=null] < * < ViewGroup +n ViewGroup[index=parent.childCount.minus(1)] >2 [text=\"广告\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/32437199",
            "https://i.gkd.li/i/32436976"
          ]
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14978239"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16642890",
          "exampleUrls": "https://e.gkd.li/347b9148-02d8-4806-bafe-3aee9e4094af"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -8,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.qq.reader:id/tv_i_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.qq.reader:id/tv_i_know\"]",
          "key": 0
        }
      ]
    }
  ]
});
