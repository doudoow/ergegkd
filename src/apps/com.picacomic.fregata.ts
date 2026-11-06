// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "PicACG",
  "id": "com.picacomic.fregata",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/imageButton_popup_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422624",
          "exampleUrls": "https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed",
          "key": 0
        },
        {
          "matches": "[vid=\"imageButton_popup_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422624",
          "exampleUrls": "https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击主页面的公告和广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_announcement_positive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422767",
          "exampleUrls": "https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1",
          "key": 0
        },
        {
          "matches": "[vid=\"button_dialog_announcement_positive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422767",
          "exampleUrls": "https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-漫画详情页广告",
      "desc": "点击卡片广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/imageButton_banner_close\"]",
          "activityIds": "com.picacomic.fregata.activities.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13423009",
          "exampleUrls": "https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3",
          "key": 0
        },
        {
          "matches": "[vid=\"imageButton_banner_close\"]",
          "activityIds": ".activities.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13423009",
          "exampleUrls": "https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动签到",
      "desc": "切换到个人页面时自动签到，并确定",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/textView_profile_punch_in\"][text=\"打嗶卡\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13422844",
          "exampleUrls": "https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328"
        },
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"][text=\"確定\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13422874",
          "exampleUrls": "https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf"
        },
        {
          "matches": "[vid=\"textView_profile_punch_in\"][text=\"打嗶卡\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13422844",
          "exampleUrls": "https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328"
        },
        {
          "matches": "[vid=\"button_dialog_custom_positive\"][text=\"確定\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13422874",
          "exampleUrls": "https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf"
        }
      ]
    },
    {
      "name": "功能类-流量提醒弹窗",
      "desc": "弹出流量提醒弹窗时自动点击“确定”",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "RelativeLayout > Button[text=\"確定\"][id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"]",
          "activityIds": "com.picacomic.fregata.activities.ComicViewerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466492",
          "key": 0
        },
        {
          "matches": "RelativeLayout > Button[text=\"確定\"][vid=\"button_dialog_custom_positive\"]",
          "activityIds": ".activities.ComicViewerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13466492",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-公告",
      "desc": "点击主页面的公告和广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_announcement_negative\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13422767"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-漫画页广告",
      "desc": "点击卡片广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/imageButton_banner_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13423009"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-签到",
      "desc": "切换到个人页面时自动签到，并确定",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/textView_profile_punch_in\"][text=\"打嗶卡\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13422844"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13422874"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-流量提醒弹窗",
      "desc": "弹出流量提醒弹窗时自动点击“确定”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "RelativeLayout > Button[text=\"確定\"][id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13466492",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-公告",
      "desc": "点击主页面的公告和广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_announcement_negative\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422767"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-漫画页广告",
      "desc": "点击卡片广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/imageButton_banner_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13423009"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到",
      "desc": "切换到个人页面时自动签到，并确定",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/textView_profile_punch_in\"][text=\"打嗶卡\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422844"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422874"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-流量提醒弹窗",
      "desc": "弹出流量提醒弹窗时自动点击“确定”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "RelativeLayout > Button[text=\"確定\"][id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/13466492",
          "key": 0
        }
      ]
    },
    {
      "name": "公告",
      "desc": "点击主页面的公告和广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_announcement_negative\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422767"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "漫画页广告",
      "desc": "点击卡片广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/imageButton_banner_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13423009"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "签到",
      "desc": "切换到个人页面时自动签到，并确定",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.picacomic.fregata:id/textView_profile_punch_in\"][text=\"打嗶卡\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422844"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"][text=\"確定\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13422874"
          ],
          "exampleUrls": [
            "https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "流量提醒弹窗",
      "desc": "弹出流量提醒弹窗时自动点击“确定”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "RelativeLayout > Button[text=\"確定\"][id=\"com.picacomic.fregata:id/button_dialog_custom_positive\"]",
          "snapshotUrls": "https://i.gkd.li/import/13466492",
          "key": 0
        }
      ]
    }
  ]
});
