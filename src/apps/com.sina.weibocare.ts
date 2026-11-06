// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WeiboBig",
  "id": "com.sina.weibocare",
  "groups": [
    {
      "name": "功能类-流量继续播放视频",
      "desc": "点击[播放]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13253223",
          "key": 0
        },
        {
          "matches": "[vid=\"ed_btn_positive\"][text=\"播放\"]",
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13253223",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-流量继续播放视频",
      "desc": "点击[播放]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-流量继续播放视频",
      "desc": "点击[播放]",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "流量继续播放视频",
      "desc": "点击[播放]",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
          "key": 0
        }
      ]
    }
  ]
});
