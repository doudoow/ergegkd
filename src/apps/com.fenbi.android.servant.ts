// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "粉笔",
  "id": "com.fenbi.android.servant",
  "groups": [
    {
      "name": "未分类-升级弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12999725",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12999725",
          "key": 0
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.fenbi.android.servant:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12999725",
          "key": 0
        }
      ]
    }
  ]
});
