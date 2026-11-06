// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为钱包",
  "id": "com.huawei.wallet",
  "groups": [
    {
      "name": "局部广告-钱包扩展服务提示",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [id=\"com.huawei.wallet:id/linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13441814",
          "key": 0
        },
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [vid=\"linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13441814",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-小额免密支付弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"开通小额免密支付\"]",
            "[vid=\"title_close_btn\"]"
          ],
          "activityIds": "com.huawei.petalpay.userapp.function.withhold.view.activity.PetalPayGuideSmallFreePwdActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16397908",
          "exampleUrls": "https://e.gkd.li/7fcdf7d8-d9db-4b30-840d-3f656f645fe3",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-首页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"ad_sign_text_and_feedback\"][visibleToUser=true]",
          "activityIds": ".view.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16833449",
          "exampleUrls": "https://e.gkd.li/11edaf9a-f54c-489c-99e0-78da25a5cc9b"
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "snapshotUrls": "https://i.gkd.li/i/16833452",
          "exampleUrls": "https://e.gkd.li/f0d67fb4-ccdb-443b-8e4e-9dff2242a84f",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-支付成功后点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"btn_completed\"][visibleToUser=true]",
          "activityIds": "com.huawei.nfc.carrera.ui.swipe.SwipeResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18146717",
          "exampleUrls": "https://e.gkd.li/984fd805-ad50-4ffc-adce-fffe42109e98",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-NFC权限",
      "desc": "点击取消",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text*=\"是否每次使用华为钱包都自动开启 NFC\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": "com.huawei.nfc.carrera.ui.swipe.SetDefaultPayServiceActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20918311",
          "exampleUrls": "https://e.gkd.li/87466a06-2169-4808-971e-d347cd40ac66",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-服务提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [id=\"com.huawei.wallet:id/linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13441814",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-服务提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [id=\"com.huawei.wallet:id/linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13441814",
          "key": 0
        }
      ]
    },
    {
      "name": "服务提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [id=\"com.huawei.wallet:id/linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13441814",
          "key": 0
        }
      ]
    }
  ]
});
