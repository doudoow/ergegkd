// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "移动爱家",
  "id": "com.cmri.universalapp",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ivCancelDlg\"][visibleToUser=true]",
          "activityIds": ".SmartMainProxyActivity",
          "snapshotUrls": "https://i.gkd.li/i/17872852",
          "key": 0
        },
        {
          "matches": "[vid=\"ivCancelDlg\"][visibleToUser=true]",
          "activityIds": [
            ".SmartMainProxyActivity",
            ".SmartMainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/30352091",
            "https://i.gkd.li/i/28761589"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "matchTime": 10000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"close_banner\"][visibleToUser=true]",
          "activityIds": ".SmartMainProxyActivity",
          "key": 0,
          "name": "横幅式",
          "snapshotUrls": "https://i.gkd.li/i/17872961"
        },
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": ".SmartMainProxyActivity",
          "key": 1,
          "name": "卡片信息流式",
          "snapshotUrls": "https://i.gkd.li/i/17872961"
        },
        {
          "matches": "[vid=\"iv_item_banner_close\"][clickable=true]",
          "activityIds": ".smarthome.control.view.CameraControlActivity",
          "key": 2,
          "name": "横幅式2",
          "snapshotUrls": "https://i.gkd.li/i/25209084"
        },
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "actionCd": 120,
          "activityIds": [
            ".SmartMainProxyActivity",
            ".SmartMainActivity"
          ],
          "key": 3,
          "name": "卡片信息流式",
          "snapshotUrls": [
            "https://i.gkd.li/i/30197268",
            "https://i.gkd.li/i/32419081"
          ]
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "key": 2,
      "rules": [
        {
          "matches": "@[vid=\"tvCancel\"] + * >3 [text*=\"新版本\"][visibleToUser=true]",
          "activityIds": ".appupdate.view.UpdateDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29660021",
          "key": 0
        }
      ]
    }
  ]
});
