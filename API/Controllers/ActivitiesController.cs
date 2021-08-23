using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Acitivities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activities>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activities>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Detail.Query {Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivities(Activities activity)
        {
            return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivites(Guid id,Activities activity)
        {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {activity = activity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActitity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}