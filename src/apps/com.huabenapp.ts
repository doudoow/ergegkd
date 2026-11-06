// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "话本小说",
  "id": "com.huabenapp",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] <n ViewGroup < ScrollView +n ViewGroup[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-阅读界面-底部社区问答",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"社区问答\"] +2 ViewGroup",
          "key": 0
        }
      ]
    }
  ]
});
