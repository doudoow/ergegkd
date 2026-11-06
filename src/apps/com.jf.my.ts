// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "蜜源",
  "id": "com.jf.my",
  "groups": [
    {
      "name": "更新提示-版本升级弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "activityIds": [
            ".MainActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ]
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13786867"
        },
        {
          "matches": "[vid=\"btn_ok\"][text=\"更新\"] - [vid=\"btn_cancel\"][text=\"关闭\"]",
          "activityIds": [
            ".MainActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ]
        },
        {
          "matches": "[vid=\"toUpgradeTv\"] - [vid=\"cancelTv\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13786867"
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog",
          "snapshotUrls": "https://i.gkd.li/i/12840619",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_back\"]",
          "activityIds": ".main.ui.dialog.HomeRedPackageDialog",
          "snapshotUrls": "https://i.gkd.li/i/12840619",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-版本升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13786867",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "key": 0
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
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12838034",
            "https://i.gkd.li/import/12840591"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13786867",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12838034",
            "https://i.gkd.li/import/12840591"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/import/13786867",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-广告弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "key": 0
        }
      ]
    }
  ]
});
