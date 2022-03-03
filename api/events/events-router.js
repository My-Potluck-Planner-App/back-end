const router = require("express").Router();

const Events = require("./events-model");

// resolves to all events
router.get("/", (req, res, next) => {
  Events.find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch(next);
});

// resolves to the chosen event
router.get("/:id", (req, res, next) => {
  Events.findById(req.params.id)
    .then((selection) => {
      res.status(200).json(selection);
    })
    .catch(next);
});

// resolves to the created event
router.post("/create", (req, res, next) => {
  Events.add(req.body)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch(next);
});

// resolves to the updated event
router.put("/:id", (req, res, next) => {
  Events.update(req.params.id, req.body)
    .then((updatedEvent) => {
      res.status(200).json(updatedEvent);
    })
    .catch(next);
});

// resolves to the deleted event
router.delete("/:id", (req, res, next) => {
  Events.remove(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch(next);
});

module.exports = router;
