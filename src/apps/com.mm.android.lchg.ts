// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "乐橙含光",
  "id": "com.mm.android.lchg",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.mm.android.lchg:id/btn_cancel\"][text*=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/import/13540871",
          "key": 0
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.mm.android.lchg:id/btn_cancel\"][text*=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/import/13540871",
          "key": 0
        }
      ]
    }
  ]
});
