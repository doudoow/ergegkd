// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "钱包",
  "id": "com.finshell.wallet",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ivClose\"][visibleToUser=true]",
          "activityIds": "com.finshell.homepage.WalletNativeActionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16451563",
          "exampleUrls": "https://e.gkd.li/b5a04cd0-2f5a-4161-838b-422552f1ba9e",
          "key": 0
        }
      ]
    }
  ]
});
