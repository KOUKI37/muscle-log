PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_set_entry` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`exercise_entry_id` integer NOT NULL,
	`weight` real,
	`reps` integer,
	`set_number` integer NOT NULL,
	FOREIGN KEY (`exercise_entry_id`) REFERENCES `exercise_entry`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_set_entry`("id", "exercise_entry_id", "weight", "reps", "set_number") SELECT "id", "exercise_entry_id", "weight", "reps", "set_number" FROM `set_entry`;--> statement-breakpoint
DROP TABLE `set_entry`;--> statement-breakpoint
ALTER TABLE `__new_set_entry` RENAME TO `set_entry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;