// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "兴业生活",
  "id": "com.cib.xyk",
  "groups": [
    {
      "name": "通知提示",
      "desc": "概率误触，谨慎开启",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
