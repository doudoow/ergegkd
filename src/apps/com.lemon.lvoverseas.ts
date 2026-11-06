// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CapCut",
  "id": "com.lemon.lvoverseas",
  "groups": [
    {
      "name": "功能类-取消登录弹窗",
      "desc": "点击x掉",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"ivCloseRight\"] + [visibleToUser=true] > [vid=\"login_btn_container\"]",
          "activityIds": "com.lemon.account.view.LoginActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34135382",
          "exampleUrls": "https://e.gkd.li/258a96fc-23c3-4509-908e-ef6073dcacbe",
          "key": 0
        }
      ]
    }
  ]
});
