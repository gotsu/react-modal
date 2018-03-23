# Implementation Status

This document shows the implementation status of `React Modal`.

| Feature        | React | Redux |
| :------------: | :---: | :---: |
| Default UI     |       |       |
| hide()         | ✓     | ✓     |
| show()         | ✓     | ✓     |
| toggle()       | ✓     | ✓     |
| enterAnimation |       |       |
| leaveAnimation |       |       |
| Custom Style   |       |       |
| History        | ✓     |       |
| Ref            | ✓     |       |
| Ref & History  | 👷    |       |

### Notes

* 두개 이상의 모달을 한 페이지에서 출력해야하고 location.state를 이용하여 모달 출력시, 모달이 동시에 출력됨. 