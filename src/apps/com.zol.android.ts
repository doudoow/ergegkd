// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中关村在线",
  "id": "com.zol.android",
  "groups": [
    {
      "name": "局部广告-首页悬浮广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"close_active\"][visibleToUser=true] + [vid=\"active_enter_layout\"][visibleToUser=true]",
          "activityIds": ".renew.ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17965705",
          "exampleUrls": "https://e.gkd.li/ac4f334e-54e7-4df8-b708-2ad101962b4c",
          "key": 0
        }
      ]
    }
  ]
});
