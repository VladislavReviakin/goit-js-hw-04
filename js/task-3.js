const profile = {
    username: "Jacob", changeUsername(newName) {
        this.username = newName;
    },
  playTime: 300, updatePlayTime(hours) {
      this.playTime += hours;
    },
    getInfo() {
      return `${username} has ${playTime} active hours!`
  }
};