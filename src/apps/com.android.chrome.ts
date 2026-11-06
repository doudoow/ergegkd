// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Chrome",
  "id": "com.android.chrome",
  "groups": [
    {
      "name": "功能类-文件可能有害-点击[仍然下载]",
      "desc": "警告⚠️：会跳过有害文件警告，请谨慎开启",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"文件可能有害\"][visibleToUser=true]",
            "[text=\"仍然下载\"][visibleToUser=true]"
          ],
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24863365",
          "exampleUrls": "https://e.gkd.li/7fd28568-a614-4dea-8928-56a20c5780b6",
          "key": 0
        }
      ]
    }
  ]
});
