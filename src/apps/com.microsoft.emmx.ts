// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Edge",
  "id": "com.microsoft.emmx",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "snapshotUrls": "https://i.gkd.li/i/13646187",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[关闭所有标签？]弹窗",
      "desc": "点击[确定]",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"关闭所有标签页?\"] + * > [text=\"确定\"]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14325653",
          "exampleUrls": "https://m.gkd.li/57941037/487f4236-676c-4fb3-bcac-17b4644edd46",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭标签页",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"关闭标签页\"]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14614992",
          "exampleUrls": "https://m.gkd.li/57941037/81f9a737-a111-4630-898b-4f2b5de0623b",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[前往CSDN APP阅读全文]弹窗",
      "desc": "点击[继续]",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"前往CSDN APP阅读全文\"] < * > [desc=\"继续\"][clickable=true]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "snapshotUrls": "https://i.gkd.li/i/14610025",
          "exampleUrls": "https://m.gkd.li/57941037/fea75b5a-010d-4f67-8998-6cf794eda975",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求消息通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[前往 CSDN APP 阅读全文]弹窗",
      "desc": "点击[继续]",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"前往 CSDN APP 阅读全文\"] < * > [desc=\"继续\"][clickable=true]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "snapshotUrls": "https://i.gkd.li/i/14610025",
          "exampleUrls": "https://m.gkd.li/57941037/fea75b5a-010d-4f67-8998-6cf794eda975",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动打开外部应用",
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"想要打开外部应用\" || text*=\"想要開啟外部應用\"][visibleToUser=true] +2 [childCount=3] > [vid=\"button1\"]",
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/27094149",
            "https://i.gkd.li/i/27301310"
          ],
          "exampleUrls": [
            "https://e.gkd.li/69bfe8dd-80c6-41c9-9f8c-35d214ebcac8",
            "https://e.gkd.li/ef904338-6c7a-4939-9333-dde30089f409"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-分享预览页选择在 Edge 中打开",
      "desc": "在 Edge Drop 分享预览页中，自动点击「在 Edge 中打开」选项",
      "key": 7,
      "rules": [
        {
          "matches": "@[vid=\"ms_layout_drop_send_link\"][clickable=true] > [text=\"在 Edge 中打开\" || text=\"在 Edge 中開啟\"]",
          "activityIds": "org.chromium.chrome.browser.edge_hub.e_drop.ui.EDropSharePreviewActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/27327732",
            "https://i.gkd.li/i/27328349"
          ],
          "exampleUrls": [
            "https://e.gkd.li/be567e4a-059c-4ba8-b825-77fcb3c93831",
            "https://e.gkd.li/07e82326-38a4-4742-bf54-ed24b7769f0c"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动确认下载",
      "desc": "自动点击下载弹窗中的[下载]按钮",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"取消\"] <n [visibleToUser=true] > Button[text*=\"下载\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30865007",
            "https://i.gkd.li/i/33471516"
          ],
          "exampleUrls": "https://e.gkd.li/df8b81cd-1bfa-402a-a317-610f9d713674",
          "key": 0
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
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "key": 0
        }
      ]
    }
  ]
});
