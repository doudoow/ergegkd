// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "疯狂刷题",
  "id": "com.yaerxing.fkst",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.yaerxing.fkst:id/iv_close\"] < LinearLayout - LinearLayout > [id=\"com.yaerxing.fkst:id/btn_update\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.yaerxing.fkst:id/iv_close\"] < LinearLayout - LinearLayout > [id=\"com.yaerxing.fkst:id/btn_update\"]",
          "key": 0
        }
      ]
    }
  ]
});
