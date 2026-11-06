// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云空间",
  "id": "com.huawei.hidisk",
  "groups": [
    {
      "name": "全屏广告-[升级云空间]弹窗",
      "desc": "点击[放弃]/[以后再说]/[关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"免费升级云空间\" || text=\"云空间不够了\"]",
            "[text=\"放弃\" || text=\"以后再说\"]"
          ],
          "activityIds": "com.huawei.android.hicloud.ui.activity.BackupNotificationActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14881774",
            "https://i.gkd.li/i/14881775"
          ],
          "exampleUrls": "https://e.gkd.li/5a445ec2-e3bf-445a-be82-7c91036bd05a"
        },
        {
          "matches": "@[clickable=true] + [visibleToUser=true][text^=\"equityDistri\"] <<n [vid=\"guid_webview_mian\"]",
          "activityIds": "com.huawei.android.hicloud.ui.activity.GuideWebViewActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15523963",
            "https://i.gkd.li/i/16511513"
          ],
          "exampleUrls": "https://e.gkd.li/a541bce4-3fb3-412a-8c51-d93f4eb78848"
        }
      ]
    }
  ]
});
