import React, { useState, useEffect, useContext } from "react";
import { Box } from "grommet";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { UserContext } from "../../../UseContext/UserContext";

import SortableItem from "./SortableItem";

const Dnddraggable = (props) => {
  const { menuName, setMenuName } = useContext(UserContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.checkDatadItem);
  }, [props.checkDatadItem]);

  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Box flex={true} wrap={true} direction="row" style={{ maxWidth: "100%" }}>
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 container mx-auto mt-4 flex-col gap-1 px-36 ">
            {items?.map((id, i) => {
              if (id.cardFlag === "true" && id.cardMenu === menuName) {
                return (
                  <div
                    className={
                      id.cardSize === "big"
                        ? "col-span-3"
                        : id.cardSize === "medium"
                        ? "col-span-2"
                        : id.cardSize === "small"
                        ? "col-span-1"
                        : "col-span-1"
                    }
                  >
                    <SortableItem
                      key={id.id}
                      id={id.id}
                      flagId={id.cardFlagId}
                      handle={true}
                      value={id.cardItem}
                      flowname={id.flowName}
                      process={id.cardProcessname}
                      items={id.cardItem}
                      fixedValue={items}
                    />
                  </div>
                );
              }
            })}
          </div>

          <DragOverlay>
            {activeId ? (
              <div
                style={{
                  width: "100%",
                  height: 350,
                  backgroundColor: "#00c2e0",
                  opacity: "5%",
                }}
              ></div>
            ) : null}
          </DragOverlay>
        </SortableContext>
      </Box>
    </DndContext>
  );
};

export default Dnddraggable;
