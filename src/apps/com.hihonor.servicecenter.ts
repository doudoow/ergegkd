// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀快服务",
  "id": "com.hihonor.servicecenter",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"float_cancel\"]",
          "activityIds": "com.hihonor.servicecardcenter.activity.LauncherActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14887872",
          "exampleUrls": "https://m.gkd.li/57941037/b4c18338-c330-4deb-9689-3e7f2e2f32a8",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-右侧浮窗广告",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"float_cancel\"]",
          "key": 0
        }
      ]
    }
  ]
});
