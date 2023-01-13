CREATE TABLE board( boardIdx INT PRIMARY KEY AUTO_INCREMENT, userid VARCHAR(30) NOT NULL, subject VARCHAR(50) NOT NULL, contentBoard TEXT, registerBoard DATETIME DEFAULT now(), hit INT DEFAULT 0);

CREATE TABLE user( userid VARCHAR(30) PRIMARY KEY, userpw VARCHAR(64) NOT NULL, username VARCHAR(50) NOT NULL, userphone VARCHAR(20) NOT NULL, useremain VARCHAR(30) NOT NULL, usergender VARCHAR(2) NOT NULL, usernick VARCHAR(50) unique NOT NULL);

CREATE TABLE comment( commentIdx INT PRIMARY KEY AUTO_INCREMENT, boardIdx INT, userid VARCHAR(30),  contentComment TEXT NOT NULL, registerComment DATETIME DEFAULT now());

CREATE TABLE likes( userid VARCHAR(30), boardIdx INT, listNum INT(11) NOT NULL);

CREATE TABLE hashtag( hashNum INT, contentHash VARCHAR(30));

CREATE TABLE sort( hashNum INT PRIMARY KEY AUTO_INCREMENT, contentHash VARCHAR(30) NOT NULL);
