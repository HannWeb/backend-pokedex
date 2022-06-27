function isBodyValid(req) {
    return (
      req.body.id_type != "" &&
      req.body.id_type != null &&
      req.body.id_value != "" &&
      req.body.id_value != null &&
      req.body.name != "" &&
      req.body.name != null &&
      req.body.lastname != "" &&
      req.body.lastname != null &&
      req.body.area != "" &&
      req.body.area != null &&
      req.body.age != "" &&
      req.body.age != null
    );
  }