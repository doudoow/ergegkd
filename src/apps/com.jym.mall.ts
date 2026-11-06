// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "交易猫",
  "id": "com.jym.mall",
  "groups": [
    {
      "name": "未分类-升级弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.jym.mall:id/tv_cancel\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-升级弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.jym.mall:id/tv_cancel\"][text=\"下次再说\"]",
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
          "matches": "[id=\"com.jym.mall:id/tv_cancel\"][text=\"下次再说\"]",
          "key": 0
        }
      ]
    }
  ]
});
