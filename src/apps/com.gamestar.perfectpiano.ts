// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "完美钢琴",
  "id": "com.gamestar.perfectpiano",
  "groups": [
    {
      "name": "全屏广告-VIP会员弹窗",
      "desc": "按[返回键]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"已完成付费，恢复VIP状态?\"] -n [text*=\"永久VIP\"]",
          "action": "back",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34023961",
          "exampleUrls": "https://e.gkd.li/8a52c238-04f7-4880-bc16-5f6c879ef034",
          "key": 0
        }
      ]
    }
  ]
});
