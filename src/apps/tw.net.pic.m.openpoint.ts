// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OPENPOINT",
  "id": "tw.net.pic.m.openpoint",
  "groups": [
    {
      "name": "全屏广告-每日弹窗广告",
      "desc": "勾选[今日不再顯示]-点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_check_box\"][checked=false]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15806622",
          "exampleUrls": "https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30"
        },
        {
          "matches": "[vid=\"ivClose\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15806622",
          "exampleUrls": "https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30"
        }
      ]
    },
    {
      "name": "通知提示-i珍食公告弹窗",
      "desc": "勾选[我已了解]-点击[確認]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@[visibleToUser=true][text=\"atom-button-control-check-box-btn-check-box-n@3x\"][checked=false] <<n [vid=\"web_view\"]",
          "activityIds": ".activity_ibon.IMapActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15806673",
          "exampleUrls": "https://e.gkd.li/a36088c2-79a7-4167-bb77-7bd9be05696b"
        },
        {
          "matches": "@[visibleToUser=true][text=\"確認\"] <<n [vid=\"web_view\"]",
          "preKeys": [
            0
          ],
          "activityIds": ".activity_ibon.IMapActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15806673",
          "exampleUrls": "https://e.gkd.li/a36088c2-79a7-4167-bb77-7bd9be05696b"
        }
      ]
    }
  ]
});
