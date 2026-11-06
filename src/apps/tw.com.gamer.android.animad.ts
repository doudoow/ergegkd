// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "動畫瘋",
  "id": "tw.com.gamer.android.animad",
  "groups": [
    {
      "name": "其他-动画疯年龄限制",
      "desc": "点击同意",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"tw.com.gamer.android.animad:id/agree_button\"][text=\"同意\"]",
          "activityIds": "tw.com.gamer.android.animad.VideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13808757",
          "key": 0
        },
        {
          "matches": "[vid=\"agree_button\"][text=\"同意\"]",
          "activityIds": ".VideoActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13808757",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-动画疯年龄限制",
      "desc": "点击同意",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"tw.com.gamer.android.animad:id/agree_button\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/i/13808757",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-动画疯年龄限制",
      "desc": "点击同意",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"tw.com.gamer.android.animad:id/agree_button\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/import/13808757",
          "key": 0
        }
      ]
    },
    {
      "name": "动画疯年龄限制",
      "desc": "点击同意",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"tw.com.gamer.android.animad:id/agree_button\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/import/13808757",
          "key": 0
        }
      ]
    }
  ]
});
