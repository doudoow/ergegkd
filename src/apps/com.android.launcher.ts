// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "系统桌面",
  "id": "com.android.launcher",
  "groups": [
    {
      "name": "其他-番茄免费小说-添加至桌面",
      "desc": "取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "TextView[id=\"com.android.launcher:id/alertTitle\"][text=\"添加至桌面\"]",
            "TextView[id=\"com.android.launcher:id/widget_name\"][text=\"随时开启 免费阅读\"]",
            "@Button[text=\"取消\"] < LinearLayout +2 LinearLayout > Button[text=\"添加\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/28154416",
          "key": 0
        }
      ]
    }
  ]
});
