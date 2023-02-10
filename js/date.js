      //오늘날짜 받아오기
      let date = new Date();
      //20230209
      let year = String(date.getFullYear());
      let month = String(date.getMonth() + 1).padStart(2, "0"); /* padStart(맞춰야할 수,"들어갈 단어나 숫자") |padEnd 는 뒤에다가 맞춰줌 */
      let day = String(date.getDate()).padStart(2, "0");
      let now = year + month + day;