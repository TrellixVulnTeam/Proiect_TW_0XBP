package com.tw;

import com.tw.Administrator.Administrator;
import com.tw.Item.Item;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

public interface Controller{
    @Operation(summary = "Get all items")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All the items were returned", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No items found", content = @Content) })
    List<Item> getItems();

    @Operation(summary = "Delete item by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The item was deleted", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No item found", content = @Content) })
    String deleteItem(int id);

    @Operation(summary = "Add class")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "The item was added", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content) })
    Item addClass(Item item);

    @Operation(summary = "Update by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The item was updated", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Item.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No item found", content = @Content) })
    Item updateItem(int id, Item item);

    @Operation(summary = "Get all administrators")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All the administrators were returned", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Administrator.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No administrators found", content = @Content) })
    List<Administrator> getAdministrator();

    @Operation(summary = "Delete administrator by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The administrator was deleted", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Administrator.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No administrator found", content = @Content) })
    String deleteAdministrator(int id);

    @Operation(summary = "Add administrator")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "The administrator was added", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Administrator.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content) })
    Administrator addClass(Administrator administrator);

    @Operation(summary = "Update by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "The administrator was updated", content = {
                    @Content(mediaType = "application/json", schema = @Schema(implementation = Administrator.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = @Content),
            @ApiResponse(responseCode = "404", description = "No administrator found", content = @Content) })
    Administrator updateAdministrator(int id, Administrator administrator);

}
