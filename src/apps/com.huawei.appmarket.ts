// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为应用市场",
  "id": "com.huawei.appmarket",
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
          "matches": "[vid=\"clock_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/15523957",
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.appmarket:id/skip_textview\"]",
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
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "activityIds": ".MarketActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228520",
          "key": 0
        },
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-应用更新页面-点击[查看更多]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"查看更多\"]",
          "activityIds": "com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/14738587",
          "exampleUrls": "https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37",
          "key": 0
        },
        {
          "matches": "[text=\"查看更多\"]",
          "activityIds": ".service.appmgr.view.activity.AppUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/14738587",
          "exampleUrls": "https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-热门应用推荐弹窗",
      "desc": "点击[直接进入]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"直接进入\" || text=\"进入主页\"][visibleToUser=true]",
          "activityIds": "com.huawei.appgallery.upgraderecommendation.ui.",
          "snapshotUrls": [
            "https://i.gkd.li/i/14861810",
            "https://i.gkd.li/i/21231632",
            "https://i.gkd.li/i/24640204"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a",
          "key": 0
        },
        {
          "matches": "[text=\"直接进入\"]",
          "activityIds": "com.huawei.appgallery.upgraderecommendation.ui.UpgradeRecommendActivity",
          "snapshotUrls": "https://i.gkd.li/i/14861810",
          "exampleUrls": "https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"close_icon\"]",
          "activityIds": "com.huawei.appmarket.MarketActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15523964",
          "exampleUrls": "https://m.gkd.li/57941037/13a31ae0-10c8-49bc-9154-363498237eff",
          "key": 0
        },
        {
          "matches": "[vid=\"close_icon\"]",
          "activityIds": ".MarketActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15523964",
          "exampleUrls": "https://m.gkd.li/57941037/13a31ae0-10c8-49bc-9154-363498237eff",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[以后再说]",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"以后再说\"][visibleToUser=true]",
          "activityIds": "com.huawei.appgallery.jointmessage.jointmessage.impl.activity.NotificationSwitchDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18328929",
          "exampleUrls": "https://e.gkd.li/1a0531ef-a18c-483d-8ac9-b50c96c6431d",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动安装应用",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"hidden_card_checkbox\"][checked=false][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18492709",
          "exampleUrls": "https://e.gkd.li/2de4eb7c-964e-4b24-ab5f-1460c7993a0b"
        },
        {
          "matches": "[text=\"继续安装\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18492712",
          "exampleUrls": "https://e.gkd.li/6b79c349-8071-4598-a337-20a2f02df2f7"
        },
        {
          "matches": "[text=\"完成\"][visibleToUser=true]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18492760",
          "exampleUrls": "https://e.gkd.li/445fc7d4-8ee3-4f29-a79b-cd4c0d4fd11f"
        }
      ]
    },
    {
      "name": "功能类-关闭自动更新提示",
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text=\"WLAN 闲时自动更新\"]",
            "[text=\"不用了\"][clickable=true]"
          ],
          "activityIds": ".service.appmgr.view.activity.AppUpdateActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25933091",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "key": 0
        }
      ]
    }
  ]
});
