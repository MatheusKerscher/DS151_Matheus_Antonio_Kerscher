import db from "./dbService";

const MediaService = {
  create: (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS media (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, media REAL);",
          [],
          () => {
            tx.executeSql(
              "INSERT INTO media (nome, media) VALUES (?, ?);",
              [obj.nome, obj.media],
              (_, result) => {
                if (result.rowsAffected > 0) {
                  resolve(result.insertId);
                } else {
                  reject("Erro ao inserir a média: " + JSON.stringify(obj));
                }
              },
              (_, error) => reject(error)
            );
          },
          (error) => reject(error)
        );
      });
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM media;",
          [],
          (_, result) => {
            const resultSet = result.rows;
            const results = [];
            for (let i = 0; i < resultSet.length; i++) {
              results.push(resultSet.item(i));
            }
            resolve(results);
          },
          (_, error) => reject(error)
        );
      });
    });
  },
};

export default MediaService;
