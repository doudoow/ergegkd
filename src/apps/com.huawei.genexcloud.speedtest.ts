// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "花瓣测速",
  "id": "com.huawei.genexcloud.speedtest",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击\"以后再说\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.huawei.genexcloud.speedtest:id/btn_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/14061490",
          "exampleUrls": "https://m.gkd.li/57941037/03083d39-1d4c-4af7-8ba1-77201b2a87f2",
          "key": 0
        }
      ]
    }
  ]
});
